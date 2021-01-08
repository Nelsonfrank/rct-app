import rules from '../../../auth/ruleConfig';

const check = (
  rules: {
    [x: string]: any;
    admin?: { static: string[] };
    leader?: {
      static: string[]; // dynamic rule not provided for action
    };
    seller?: { static: string[] };
    buyer?: { static: string[] };
  },
  role: string | number,
  action: string | number,
  data: any,
) => {
  const permissions = rules[role];
  if (!permissions) {
    // role is not present in the rules
    return false;
  }

  const staticPermissions = permissions.static;

  if (staticPermissions && staticPermissions.includes(action)) {
    // static rule not provided for action
    return true;
  }

  const dynamicPermissions = permissions.dynamic;

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) {
      // dynamic rule not provided for action
      return false;
    }

    return permissionCondition(data);
  }
  return false;
};

const Can = (props: {
  role: string | number;
  perform: string | number;
  data: any;
  yes: () => any;
  no: () => any;
}) =>
  check(rules, props.role, props.perform, props.data)
    ? props.yes()
    : props.no();

Can.defaultProps = {
  yes: () => null,
  no: () => null,
};

export default Can;
