import {Player, Team} from "immino-lib";

export abstract class AbstractTeamBuilderService {
  abstract buildTeams(players: Player[]): Team[];
}
