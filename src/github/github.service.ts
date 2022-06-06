import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';

@Injectable()
export class GithubService {
	private repository:string = "https://api.github.com/repos/cjcarlosgc/fulltimeforce-challenge"
	constructor(private httpService: HttpService) {		
	}
	getCommits(){		
		return this.httpService.get(`${this.repository}/commits`).pipe(map((resp)=>resp.data));
	}
	create(createGithubDto: CreateGithubDto) {
		return 'This action adds a new github';
	}

	findAll() {
		return `This action returns all github`;
	}

	findOne(id: number) {
		return `This action returns a #${id} github`;
	}

	update(id: number, updateGithubDto: UpdateGithubDto) {
		return `This action updates a #${id} github`;
	}

	remove(id: number) {
		return `This action removes a #${id} github`;
	}
}
