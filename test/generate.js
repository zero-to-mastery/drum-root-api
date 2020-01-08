// const faker = require("faker");

const buildReq = ({ user = {}, ...overrides } = {}) => {
  const req = { user, body: {}, params: {}, ...overrides };
  return req;
};

const buildRes = (overrides = {}) => {
  const res = {
    json: jest.fn(() => res).mockName("json"),
    status: jest.fn(() => res).mockName("status"),
    ...overrides
  };
  return res;
};

const buildNext = impl => {
  return jest.fn(impl).mockName("next");
};

module.exports = {
  buildReq,
  buildRes,
  buildNext
};
