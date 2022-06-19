export class soccerPlayer{
    playerId: number;
    name: string;
    jerseyNumber: number;
  
    constructor(playerId: number, name: string, jerseyNumber:number,) {
      this.playerId = playerId;
      this.name = name;
      this.jerseyNumber = jerseyNumber;
    }
}