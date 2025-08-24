// Allowed statuses for simple state machine
const ALLOWED_STATUS = ['pending', 'in_progress', 'completed'];

/**
 * Validate a full Task payload (used for POST and PUT).
 * Returns { valid: boolean, errors: string[] }
 */
function validateTaskPayload(payload = {}) {
  const errors = [];
  const { title, description, dueDate, status } = payload;

  if (!title || typeof title !== 'string' || title.trim().length < 1) {
    errors.push('title is required and must be a non-empty string');
  }
  if (!description || typeof description !== 'string') {
    errors.push('description is required and must be a string');
  }
  // Expect ISO date string; also accept YYYY-MM-DD
  const date = new Date(dueDate);
  if (!dueDate || Number.isNaN(date.getTime())) {
    errors.push('dueDate is required and must be a valid date string (ISO/YYYY-MM-DD)');
  }
  if (!status || !ALLOWED_STATUS.includes(status)) {
    errors.push(`status is required and must be one of: ${ALLOWED_STATUS.join(', ')}`);
  }

  return { valid: errors.length === 0, errors };
}

module.exports = {
  ALLOWED_STATUS,
  validateTaskPayload
};
