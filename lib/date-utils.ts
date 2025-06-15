// Date parsing utilities for consistent date handling

/**
 * Parse date string in format "DD. month YYYY" to Date object
 * Example: "14. juni 2025" -> Date
 */
export function parseBosnianDate(dateStr: string): Date {
  const months: Record<string, number> = {
    'januar': 0,
    'februar': 1,
    'mart': 2,
    'april': 3,
    'maj': 4,
    'juni': 5,
    'juli': 6,
    'august': 7,
    'septembar': 8,
    'oktobar': 9,
    'novembar': 10,
    'decembar': 11,
  };

  // Handle date ranges like "15-16. oktobar 2025"
  const rangeMatch = dateStr.match(/(\d+)-(\d+)\.\s+(\w+)\s+(\d{4})/);
  if (rangeMatch) {
    const [, , endDay, month, year] = rangeMatch;
    const monthIndex = months[month.toLowerCase()];
    if (monthIndex !== undefined) {
      return new Date(parseInt(year), monthIndex, parseInt(endDay));
    }
  }

  // Handle single dates like "14. juni 2025"
  const match = dateStr.match(/(\d+)\.\s+(\w+)\s+(\d{4})/);
  if (match) {
    const [, day, month, year] = match;
    const monthIndex = months[month.toLowerCase()];
    if (monthIndex !== undefined) {
      return new Date(parseInt(year), monthIndex, parseInt(day));
    }
  }

  // Fallback to current date if parsing fails
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Failed to parse Bosnian date: ${dateStr}`);
  }
  return new Date();
}

/**
 * Safe date conversion that handles both Date objects and date strings
 */
export function ensureDate(date: Date | string): Date {
  if (date instanceof Date) {
    return date;
  }
  
  // Try to parse as Bosnian date format first
  if (typeof date === 'string' && /\d+\.\s+\w+\s+\d{4}/.test(date)) {
    return parseBosnianDate(date);
  }
  
  // Fallback to standard Date parsing
  const parsed = new Date(date);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}