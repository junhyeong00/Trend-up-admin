import Option from './Option';

export default class Options {
  options = [];

  constructor({ options = [] }) {
    this.options = options;
  }

  addOption({
    optionName, optionPrice,
  }) {
    const id = Math.max(0, ...this.options.map((i) => i.id)) + 1;
    const option = new Option({
      id,
      optionName,
      optionPrice,
    });

    return new Options({
      options: [...this.options, option],
    });
  }

  deleteOption({
    id,
  }) {
    const index = this.options.findIndex((i) => i.id === id);

    return new Options({
      options: [
        ...this.options.slice(0, index),
        ...this.options.slice(index + 1),
      ],
    });
  }
}
