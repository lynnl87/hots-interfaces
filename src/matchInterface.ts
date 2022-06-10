export module Match {

    export interface TeamEvent {
        loop: number;
        type: string;
        team: number;
        time: number;
    }

    export interface Stats {
        date: string;
        firstFort: number;
        firstFortWin: boolean;
        firstKeep: number;
        firstKeepWin: number;
        firstObjective: number;
        firstObjectiveWin: false;
        map: string;
        mercs: { captures: TeamEvent[]}
        winner: number;
    }
}