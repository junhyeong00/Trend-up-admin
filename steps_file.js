const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = function () {
  return actor({
    setupProducts() {
      this.amOnPage(`${backdoorBaseUrl}/setup-products`);
    },

    setupInquiries() {
      this.amOnPage(`${backdoorBaseUrl}/setup-inquiries`);
    },
  });
};
