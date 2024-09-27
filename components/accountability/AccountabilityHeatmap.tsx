import {
  eachDayOfInterval,
  endOfYear,
  format,
  getDay,
  startOfWeek,
  startOfYear,
} from "date-fns";
import React, { useMemo } from "react";

interface Entry {
  creationDate: string;
  isCompleted: boolean | null;
}

interface AccountabilityHeatmapProps {
  entries: Entry[];
  year?: number;
  cellSize?: number;
  cellGap?: number;
  colors?: {
    completed: string;
    notCompleted: string;
    noData: string;
    empty: string;
  };
}

const AccountabilityHeatmap: React.FC<AccountabilityHeatmapProps> = ({
  entries,
  year = new Date().getFullYear(),
  cellSize = 16,
  cellGap = 2,
  colors = {
    completed: "rgb(241, 135, 1)", // Skillfy Orange
    notCompleted: "rgb(17 24 39)", // Skillfy Black
    noData: "rgb(215, 215, 215)", // Grey
    empty: "transparent", // Transparent
  },
}) => {
  // Constants
  const WEEK_DAYS = 7;
  const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const DATE_FORMAT = "yyyy-MM-dd";

  /**
   * Generate all dates of the year, starting from the first Sunday before or on Jan 1.
   */
  const startDate = useMemo(
    () => startOfWeek(startOfYear(new Date(year, 0, 1)), { weekStartsOn: 0 }),
    [year]
  );
  const endDate = useMemo(() => endOfYear(new Date(year, 0, 1)), [year]);

  const datesOfYear = useMemo(
    () => eachDayOfInterval({ start: startDate, end: endDate }),
    [startDate, endDate]
  );

  /**
   * Map entries by date for quick lookup.
   */
  const dateToEntryMap = useMemo(() => {
    return entries.reduce<Record<string, Entry>>((acc, entry) => {
      const dateKey = entry.creationDate.slice(0, 10); // Extract YYYY-MM-DD
      acc[dateKey] = entry;
      return acc;
    }, {});
  }, [entries]);

  /**
   * Build weeks array, where each week contains up to 7 days.
   */
  const weeks = useMemo(() => {
    const weeksArray: Array<Array<Date>> = [];
    let currentWeek: Array<Date> = [];

    datesOfYear.forEach((date, index) => {
      currentWeek.push(date);

      // If it's Saturday or the last date, push the current week
      if (getDay(date) === 6 || index === datesOfYear.length - 1) {
        weeksArray.push(currentWeek);
        currentWeek = [];
      }
    });

    return weeksArray;
  }, [datesOfYear]);

  /**
   * Build months array with grid positions for labeling.
   */
  const monthGridPositions = useMemo(() => {
    const monthPositions: Array<{
      name: string;
      startWeekIndex: number;
      endWeekIndex: number;
    }> = [];
    const monthWeeksMap: Record<number, number[]> = {}; // Map of month index to week indices

    weeks.forEach((week, weekIndex) => {
      week.forEach((date) => {
        if (date.getFullYear() === year) {
          const month = date.getMonth();
          if (!monthWeeksMap[month]) {
            monthWeeksMap[month] = [];
          }
          if (!monthWeeksMap[month].includes(weekIndex)) {
            monthWeeksMap[month].push(weekIndex);
          }
        }
      });
    });

    const sortedMonths = Object.keys(monthWeeksMap)
      .map(Number)
      .sort((a, b) => a - b);

    sortedMonths.forEach((monthIndex, idx) => {
      const weekIndices = monthWeeksMap[monthIndex];
      const startWeekIndex = Math.min(...weekIndices);
      const endWeekIndex =
        idx < sortedMonths.length - 1
          ? Math.min(...monthWeeksMap[sortedMonths[idx + 1]])
          : weeks.length;

      monthPositions.push({
        name: MONTH_NAMES[monthIndex],
        startWeekIndex,
        endWeekIndex,
      });
    });

    return monthPositions;
  }, [weeks, year]);

  /**
   * Helper function to get the background color based on the entry's status.
   */
  const getBackgroundColor = (date: Date): string => {
    const dateString = format(date, DATE_FORMAT);
    const entry = dateToEntryMap[dateString];

    if (entry) {
      if (entry.isCompleted === true) {
        return colors.completed;
      } else if (entry.isCompleted === false) {
        return colors.notCompleted;
      }
    }
    return colors.noData;
  };

  return (
    <div style={{ overflowX: "auto" }}>
      {/* Year Header */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        Contribution Heatmap - {year}
      </div>

      {/* Container Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: `auto repeat(${WEEK_DAYS}, ${cellSize}px)`,
          gridTemplateColumns: `repeat(${weeks.length}, ${cellSize}px)`,
          gap: `${cellGap}px`,
        }}
      >
        {/* Month Labels */}
        {monthGridPositions.map((month) => (
          <div
            key={month.name}
            style={{
              gridColumnStart: month.startWeekIndex + 1,
              gridColumnEnd: month.endWeekIndex + 1,
              gridRowStart: 1,
              textAlign: "center",
              fontSize: `${cellSize * 0.75}px`,
            }}
          >
            {month.name}
          </div>
        ))}

        {/* Heatmap Cells */}
        {weeks.map((week, weekIndex) =>
          week.map((date, dayIndex) => {
            const key = `week-${weekIndex}-day-${dayIndex}`;
            const isCurrentYear = date.getFullYear() === year;
            const backgroundColor = isCurrentYear
              ? getBackgroundColor(date)
              : colors.empty;
            const tooltip = isCurrentYear ? format(date, DATE_FORMAT) : "";

            return (
              <div
                key={key}
                title={tooltip}
                style={{
                  width: `${cellSize}px`,
                  height: `${cellSize}px`,
                  backgroundColor,
                  gridColumnStart: weekIndex + 1,
                  gridRowStart: dayIndex + 2, // +2 to account for month labels
                  borderRadius: "2px",
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default AccountabilityHeatmap;
