import { TestBed } from '@angular/core/testing';

import { ServPokemonsService } from './serv-pokemons.service';

describe('ServPokemonsService', () => {
  let service: ServPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
