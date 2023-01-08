import Options from './Options';
import Option from './Option';

describe('Options', () => {
  let options;

  beforeEach(() => {
    options = new Options([]);
  });

  it('adds an option', () => {
    options = options.addOption({ optionName: '기본', optionPrice: 0 });

    expect(options.options).toHaveLength(1);
  });

  it('delete an option', () => {
    const id = 1;

    options = options.addOption({ optionName: '기본', optionPrice: 0 });

    expect(options.options).toHaveLength(1);

    options = options.deleteOption({ id });

    expect(options.options).toHaveLength(0);
  });
});
