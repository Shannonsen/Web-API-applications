import { TestBed } from '@angular/core/testing';
import { BusquedaService } from './busqueda.service';
import { HttpClientModule } from '@angular/common/http';

describe('BusquedaService', () => {
  let service: BusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
