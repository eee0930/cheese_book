export class ValifyForms {
  constructor(private $input: HTMLInputElement) {
    this.render();
  }

  numOfInputs = () => {
    const len = this.$input.value.length;
    return len < 1 ? false : true;
  };

  render = () => {
    const varifies = [
      { fn: this.numOfInputs, msg: '검색어는 1자 이상 입력해 주세요.' },
    ];
  };
}
