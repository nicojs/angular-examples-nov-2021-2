import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JediModule } from './jedi.module';
import { JedisComponent } from './jedis.component';
import { Jedi } from '../models/jedi.model';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { By } from '@angular/platform-browser';

describe('JedisComponent', () => {
  let sut: ComponentFixture<JedisComponent>;
  let element: HTMLElement;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JediModule, HttpClientTestingModule],
    }).compileComponents();
    sut = TestBed.createComponent(JedisComponent);
    element = sut.nativeElement;

    http = TestBed.inject(HttpTestingController);
    sut.detectChanges();
    await sut.whenStable();
  });

  it('should retrieve jedis and bind them to the jedi-list', async () => {
    const request = http.expectOne({
      url: 'http://localhost:3000/jedis'
    });
    const mockJedis: Jedi[] = [{ name: 'foo', midichlorian: 20 }];
    request.flush(mockJedis);
    sut.detectChanges();
    await sut.whenStable();
    sut.detectChanges();
    await sut.whenStable();

    // Assert
    const jediListComponent: JediListComponent = sut.debugElement.query(By.css('sw-jedi-list')).componentInstance;
    expect(jediListComponent.jedi).toEqual(mockJedis);
  });
});
