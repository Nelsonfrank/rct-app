const rules = {
  admin: {
    static: [
      'customer:listing',
      'finance:module',
      'customer:followup',
      'customer:viewQuestions',
      'user:addBonus',
      'user:viewTree',
      'user:activate',
      'geofence:delete',
      'geofence:activate',
      'geofence:addfence',
      'geofence:listing',
      'cashout:addcashout',
      'withholding:add',
      'withholding:delete',
      'withholding:activate',
      'bonus:listing',
      'audit:listing',
    ],
  },
  leader: {
    static: ['user:listing', 'user:addBonus', 'finance:module'],
  },
  seller: {
    static: ['user:listing', 'cashout:listing', 'finance:module'],
  },
  buyer: {
    static: ['customer:listing', 'customer:followup', 'customer:viewQuestions'],
  },
};

export default rules;
