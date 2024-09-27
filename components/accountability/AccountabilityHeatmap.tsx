import {
  eachDayOfInterval,
  endOfYear,
  format,
  getDay,
  startOfWeek,
  startOfYear,
} from "date-fns";
import React from "react";

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
    completed: "#28a745", // Green
    notCompleted: "#dc3545", // Red
    noData: "#6c757d", // Grey
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

  // Generate all dates of the year, starting from the first Sunday before or on Jan 1
  const startDate = startOfWeek(startOfYear(new Date(year, 0, 1)), {
    weekStartsOn: 0,
  });
  const endDate = endOfYear(new Date(year, 0, 1));

  const datesOfYear = eachDayOfInterval({ start: startDate, end: endDate });

  // Map entries by date for quick lookup
  const dateToEntryMap: Record<string, Entry> = entries.reduce((acc, entry) => {
    const dateKey = entry.creationDate.slice(0, 10); // YYYY-MM-DD
    acc[dateKey] = entry;
    return acc;
  }, {} as Record<string, Entry>);

  // Build weeks array
  const weeks: Array<Array<Date | null>> = [];
  let currentWeek: Array<Date | null> = [];

  datesOfYear.forEach((date, index) => {
    const dayOfWeek = getDay(date); // 0 (Sunday) to 6 (Saturday)

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(date);

    // Add the last week when reaching the end
    if (index === datesOfYear.length - 1) {
      weeks.push(currentWeek);
    }
  });

  // Build months array with grid positions
  const monthGridPositions: Array<{
    name: string;
    startWeekIndex: number;
    endWeekIndex: number;
  }> = [];
  const monthWeeksMap: Record<number, number[]> = {}; // month index (0-11) to week indices

  weeks.forEach((week, weekIndex) => {
    week.forEach((date) => {
      const dateYear = date.getFullYear();
      const dateMonth = date.getMonth();
      if (dateYear === year) {
        if (!monthWeeksMap[dateMonth]) {
          monthWeeksMap[dateMonth] = [];
        }
        if (!monthWeeksMap[dateMonth].includes(weekIndex)) {
          monthWeeksMap[dateMonth].push(weekIndex);
        }
      }
    });
  });

  const sortedMonthIndices = Object.keys(monthWeeksMap)
    .map(Number)
    .sort((a, b) => a - b);

  sortedMonthIndices.forEach((monthIndex, idx) => {
    const weekIndices = monthWeeksMap[monthIndex];
    const startWeekIndex = Math.min(...weekIndices);
    let endWeekIndex: number;

    if (idx < sortedMonthIndices.length - 1) {
      const nextMonthIndex = sortedMonthIndices[idx + 1];
      endWeekIndex = Math.min(...monthWeeksMap[nextMonthIndex]);
    } else {
      endWeekIndex = weeks.length;
    }

    monthGridPositions.push({
      name: MONTH_NAMES[monthIndex],
      startWeekIndex,
      endWeekIndex,
    });
  });

  // Helper function to get background color
  const getBackgroundColor = (date: Date): string => {
    const dateString = format(date, "yyyy-MM-dd");
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
    <>
      <div style={{ overflowX: "auto" }}>
        {/* Year Header */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>{year}</div>

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
              let backgroundColor = colors.empty;
              let tooltip = "";

              if (date.getFullYear() === year) {
                backgroundColor = getBackgroundColor(date);
                tooltip = format(date, "yyyy-MM-dd");
              }

              return (
                <div
                  key={key}
                  title={tooltip}
                  style={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    backgroundColor,
                    gridColumnStart: weekIndex + 1,
                    gridRowStart: dayIndex + 2, // +2 because first row is month labels
                    borderRadius: "2px",
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default AccountabilityHeatmap;
