export module Player {

    export interface TimeEvent {
        /**
         * Time interval of game event.
         */
         loop: number;

         /**
          * Human readable time format.
          */
         time: number;
    }

    export interface EventCollection {
        count: number;
        events: TimeEvent[];
    }

    /**
     * Standard hero slot used.
     */
    export interface HeroSlot {
        /**
         * Toon name
         */
        player: string;

        /**
         * Hero they were playing.
         */
        hero: string;
    }

    export interface Takedowns extends TimeEvent{
        /**
         * Time interval of game event.
         */
        loop: number;

        /**
         * Human readable time format.
         */
        time: number;

        /**
         * X Position of the take down.
         */
        x: number;
        
        /**
         * Y position of the take down.
         */
        y: number;

        /**
         * List of people involved with the murder.
         */
        killers: HeroSlot[];

        /**
         * Victim of the murder.
         */
        victim: HeroSlot;
    }

    export interface Game {
        Takedowns: number;
        Deaths: number;
        TownKills: number;
        SoloKill: number;
        Assists: number;
        MetaExperience: number;
        Level: number;
        TeamTakedowns: number;
        ExperienceContribution: number;
        Healing: number;
        SiegeDamage: number;
        StructureDamage: number;
        MinionDamage: number;
        HeroDamage: number;
        MercCampCaptures: number;
        SelfHealing: number;
        TimeSpentDead: number;
        TimeCCdEnemyHeroes: number;
        CreepDamage: number;
        SummonDamage: number;
        Tier1Talent: number;
        Tier2Talent: number;
        Tier3Talent: number;
        Tier4Talent: number;
        Tier5Talent: number;
        Tier6Talent: number;
        Tier7Talent: number;
        DamageTaken: number;
        DamageSoaked: number;
        TeamfightDamageTaken: number;
        TeamfightHeroDamage: number;
        TeamfightHealingDone: number;
        OutnumberedDeaths: number;
        DPM: number;
        HPM: number;
        XPM: number;
    }

    export interface Stats {
        hero: string;
        name: string;
        uuid: number;
        region: number;
        realm: number;
        tag: number;
        team: number;
        ToonHandle: string;
        gameStats: Game;
        takedowns: Takedowns[];
        deaths: Takedowns[];
        globes: EventCollection;
    }
}