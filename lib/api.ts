import type { DashboardData } from "./types";

// Mock API function to fetch dashboard data
export async function fetchDashboardData(
  timeRange: "day" | "week" | "month" | "year" = "day"
): Promise<DashboardData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Helper functions for dummy data
  const getSalesTrends = () => {
    if (timeRange === "day") {
      // 24 hours
      return Array.from({ length: 24 }, (_, i) => ({
        date: `${i}:00`,
        revenue: Math.floor(Math.random() * 500) + 100,
      }));
    } else if (timeRange === "week") {
      // 7 days
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return Array.from({ length: 7 }, (_, i) => ({
        date: days[i],
        revenue: Math.floor(Math.random() * 4000) + 1000,
      }));
    } else if (timeRange === "month") {
      // 30 days
      return Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return {
          date: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          revenue: Math.floor(Math.random() * 5000) + 1000,
        };
      });
    } else {
      // year: 12 months
      const months = [
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
      return months.map((m) => ({
        date: m,
        revenue: Math.floor(Math.random() * 20000) + 5000,
      }));
    }
  };

  const getUserGrowth = () => {
    if (timeRange === "year") {
      // 5 years
      const years = ["2020", "2021", "2022", "2023", "2024"];
      return years.map((y) => ({
        month: y,
        users: Math.floor(Math.random() * 2000) + 1000,
      }));
    } else {
      // 12 months
      const months = [
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
      return months.map((m) => ({
        month: m,
        users: Math.floor(Math.random() * 400) + 100,
      }));
    }
  };

  const getCategoryDistribution = () => [
    { name: "Electronics", value: 35, sales: 30450 },
    { name: "Clothing", value: 25, sales: 21750 },
    { name: "Home", value: 20, sales: 17400 },
    { name: "Sports", value: 15, sales: 13050 },
    { name: "Other", value: 5, sales: 4350 },
  ];

  const getRecentSales = () => {
    const count =
      timeRange === "day"
        ? 5
        : timeRange === "week"
        ? 10
        : timeRange === "month"
        ? 15
        : 20;
    const statuses = ["Completed", "Processing", "Pending"];
    const products = [
      "Laptop",
      "Smartphone",
      "Headphones",
      "Monitor",
      "Keyboard",
      "Mouse",
      "Tablet",
      "Camera",
      "Speaker",
      "Smartwatch",
    ];
    const customers = [
      "John Doe",
      "Jane Smith",
      "Robert Johnson",
      "Emily Davis",
      "Michael Brown",
      "Sarah Wilson",
      "David Miller",
      "Lisa Moore",
      "James Taylor",
      "Jennifer Anderson",
    ];
    return Array.from({ length: count }, (_, i) => ({
      id: `ORD-${Math.floor(Math.random() * 10000)}`,
      date: new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      customer: customers[Math.floor(Math.random() * customers.length)],
      product: products[Math.floor(Math.random() * products.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      amount: Math.floor(Math.random() * 1000) + 50,
    }));
  };

  // Generate data arrays
  const salesTrends = getSalesTrends();
  const userGrowth = getUserGrowth();
  const categoryDistribution = getCategoryDistribution();
  const recentSales = getRecentSales();

  // Calculate metrics based on data arrays
  const totalUsers = userGrowth.reduce((sum, u) => sum + u.users, 0);
  const userGrowthRate =
    userGrowth.length > 1
      ? ((userGrowth[userGrowth.length - 1].users - userGrowth[0].users) /
          userGrowth[0].users) *
        100
      : 0;
  const activeSessions = Math.floor(Math.random() * 1000) + 500;
  const sessionGrowthRate = Math.random() * 10;
  const salesRevenue = salesTrends.reduce((sum, s) => sum + s.revenue, 0);
  const revenueGrowthRate =
    salesTrends.length > 1
      ? ((salesTrends[salesTrends.length - 1].revenue -
          salesTrends[0].revenue) /
          salesTrends[0].revenue) *
        100
      : 0;

  // Return mock data
  return {
    metrics: {
      totalUsers,
      userGrowthRate: Number(userGrowthRate.toFixed(1)),
      activeSessions,
      sessionGrowthRate: Number(sessionGrowthRate.toFixed(1)),
      salesRevenue,
      revenueGrowthRate: Number(revenueGrowthRate.toFixed(1)),
    },
    salesTrends,
    userGrowth,
    categoryDistribution,
    recentSales,
  };
}
