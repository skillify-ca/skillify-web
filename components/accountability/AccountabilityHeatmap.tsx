import moment from "moment";

const ContributionCell = ({ color, date, count }) => (
  <div
    className="w-3 h-3 rounded-sm m-0.5"
    style={{ backgroundColor: color }}
    title={`${count} contributions on ${date.format("MMM D, YYYY")}`}
  />
);

const ContributionGraph = ({ data }) => {
  const currentYear = moment().year();
  const startOfYear = moment(`${currentYear}-01-01`).startOf("week");
  const endOfYear = moment(`${currentYear}-12-31`).endOf("week");

  // Helper functions
  const getContributionCount = (date) => {
    const contribution = data.find((d) => moment(d.date).isSame(date, "day"));
    return contribution ? contribution.count : 0;
  };

  const getColor = (count) => {
    if (count === 0) return "#ebedf0"; // No contributions
    if (count === 1) return "#9be9a8"; // 1 contribution
    return "#40c463"; // 2 or more contributions
  };

  // Generate weeks and their corresponding contribution counts
  const weeks = Array.from(
    { length: endOfYear.diff(startOfYear, "weeks") + 1 },
    (_, weekIndex) => {
      return Array.from({ length: 7 }, (_, dayIndex) => {
        const date = moment(startOfYear).add(weekIndex * 7 + dayIndex, "days");
        return {
          date,
          count: date.year() === currentYear ? getContributionCount(date) : 0,
          color:
            date.year() === currentYear
              ? getColor(getContributionCount(date))
              : "transparent",
        };
      });
    }
  );

  return (
    <div className="w-full flex flex-wrap">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="flex flex-col">
          {week.map(({ date, count, color }, dayIndex) => (
            <ContributionCell
              key={dayIndex}
              color={color}
              date={date}
              count={count}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const AccountabilityHeatmap = () => {
  const currentYear = moment().year();
  const startOfYear = moment(`${currentYear}-01-01`);
  const endOfYear = moment(`${currentYear}-12-31`);

  // Generate mock data for the current year
  const mockData = Array.from(
    { length: endOfYear.diff(startOfYear, "days") + 1 },
    (_, index) => {
      const date = moment(startOfYear).add(index, "days");
      return {
        date: date.format("YYYY-MM-DD"),
        count: Math.floor(Math.random() * 20),
      };
    }
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Contribution Graph ({currentYear})
      </h2>
      <ContributionGraph data={mockData} />
    </div>
  );
};

export default AccountabilityHeatmap;
