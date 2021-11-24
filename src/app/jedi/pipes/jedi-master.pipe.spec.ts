import { JediMasterPipe } from "./jedi-master.pipe";


describe('jediMaster pipe', () => {

  it('should prefix with "Master"', () => {
    const sut = new JediMasterPipe('en-US');
    const result = sut.transform('Foo');
    expect(result).toBe('Master Foo');
  });

  it('should prefix with "Meester" when locale is "nl-NL"', () => {
    const sut = new JediMasterPipe('nl-NL');
    const result = sut.transform('Foo');
    expect(result).toBe('Meester Foo');
  });
});
