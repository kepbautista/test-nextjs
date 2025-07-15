module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // Updated regex to make the ticket and `~` optional
      headerPattern: /^(\w+):(?:\s(CHH-\d+)\s~)?\s(.+)$/,
      // Regex groups in the headerPattern:
      // 1. type (e.g., feat, fix)
      // 2. ticket number (optional, e.g., CHH-00001)
      // 3. subject (commit message text)
      headerCorrespondence: ['type', 'ticket', 'subject'],
    },
  },
  rules: {
    // Enforce valid types
    'type-enum': [
      2,
      'always',
      ['feat', 'feature', 'fix', 'update', 'refactor'],
    ],
    // Allow ticket to be optional but validate if present
    'ticket-pattern': [2, 'always', /^CHH-\d+$/],
    // Ensure the subject exists
    'subject-empty': [2, 'never'],
  },
  plugins: [
    {
      rules: {
        'ticket-pattern': ({ ticket }) => {
          // Allow empty ticket but validate if present
          if (!ticket) return [true]
          const isValidTicket = /^CHH-\d+$/.test(ticket)
          return [
            isValidTicket,
            'Ticket number must match the pattern CHH-00001 if specified.',
          ]
        },
      },
    },
  ],
}
