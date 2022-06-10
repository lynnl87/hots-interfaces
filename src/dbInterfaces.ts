export module ReplayData {
    export interface Row {
        id: number;
        games_id: number;
        player: number;
        hero: string;
        team: number;
        win: number;
        timestamp: string;
        time_offset: number;
        map_id: number;
        version: string;
        map_name: string;
        playerId: number;
        name: string;
        tag: string;
    }
}