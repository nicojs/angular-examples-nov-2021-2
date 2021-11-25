import { DecimalPipe } from '@angular/common';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Jedi } from 'src/app/models/jedi.model';
import { JediMasterPipe } from '../pipes/jedi-master.pipe';
import { MidichlorianPipe } from '../pipes/midichlorian.pipe';

import { JediListComponent } from './jedi-list.component';

describe('JediListComponent', () => {
  let sut: ComponentFixture<JediListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JediListComponent, MidichlorianPipe, JediMasterPipe],
      providers: [DecimalPipe],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    sut = TestBed.createComponent(JediListComponent);
    element = sut.nativeElement;
  });

  it('should list the jedis in a table', async () => {
    await setJedis([{ name: 'Yuri', midichlorian: 25_000 }]);
    expect(element.querySelectorAll('tbody tr').length).toEqual(1);
  });

  it('should format jedis as expected', async () => {
    await setJedis([{ name: 'Yuri', midichlorian: 25_000 }]);
    const row = element.querySelector('tbody tr');
    expect(
      row?.querySelector('[test-id="jediName"]')?.textContent?.trim()
    ).toEqual('Master Yuri');
    expect(
      row?.querySelector('[test-id="jediMidichlorian"]')?.textContent?.trim()
    ).toEqual('25,000 midichlorian');
  });

  async function setJedis(jedis: Jedi[]) {
    sut.componentInstance.jedi = [{ name: 'Yuri', midichlorian: 25_000 }];
    sut.componentInstance.ngOnChanges({
      jedi: new SimpleChange(undefined, jedis, true),
    });
    sut.detectChanges();
    await sut.whenStable();
  }
});
