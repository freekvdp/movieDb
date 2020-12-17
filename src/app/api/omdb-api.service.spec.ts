import { TestBed } from '@angular/core/testing';

import { OmdbApiService } from './omdb-api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OmdbApiUtils } from './utils';

describe('OmdbApiService', () => {
  let service: OmdbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OmdbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMoviesBySearchInput', () => {
    it('should send a request to omdb-api via http', () => {
      const http = TestBed.inject(HttpClient);
      spyOn(http, 'get');

      service.getMoviesBySearchInput('');

      expect(http.get).toHaveBeenCalled();
    });

    it('should call http.get with a searchQuery based on the parameter', () => {
      const http = TestBed.inject(HttpClient);
      spyOn(http, 'get');

      const searchParam = 'avengers';
      service.getMoviesBySearchInput(searchParam);

      const expectedUrl = OmdbApiUtils.makeQueryMoviesUrl(searchParam);
      expect(http.get).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe('getMovieDetailsById', () => {
    it('should send a request to omdb-api via http', () => {
      const http = TestBed.inject(HttpClient);
      spyOn(http, 'get');

      service.getMovieDetailsById('');

      expect(http.get).toHaveBeenCalled();
    });

    it('should call http.get with a searchQuery based on the parameter', () => {
      const http = TestBed.inject(HttpClient);
      spyOn(http, 'get');

      const searchParam = 'someImdbId';
      service.getMovieDetailsById(searchParam);

      const expectedUrl = OmdbApiUtils.makeQueryMovieDetailsUrl(searchParam);
      expect(http.get).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
