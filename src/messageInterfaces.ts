export module Message {
    /**
     * Enumerations for the different types of message events.
     */
    export enum MessageType {
        Chat = "NNet.Game.SChatMessage",
        Ping = "NNet.Game.SPingMessage",
        Loading = "NNet.Game.SLoadingProgressMessage",
        PlayerAnnouncement = "NNet.Game.SPlayerAnnounceMessage",
        Reconnect = "NNet.Game.SReconnectNotifyMessage",
    }

    /**
     * Enumerations for the different types of announcements.
     */
    export enum AnnouncementType {
        None = "None",
        Ability = "Ability",
        Behavior = "Behavior",
        Vitals = "Vitals"
    }

    export interface MessageEventUser {
        m_userId: number;
    }

    export interface MessageEvent {
        _event: MessageType;
        _eventid: number;
        _gameloop: number;
        _userid: MessageEventUser;
        _bits: number;
    }

    /**
     * Fired off when a user is trying to reconnect.
     */
    export interface ReconnectMessage extends MessageEvent {
        /**
         * The status type.
         */
        m_status: number;
    }

    export interface ProgressMessage extends MessageEvent {
        m_progress: number;
    }

    export interface RecipientMessage extends MessageEvent {
        m_recipient: number;
    }

    export interface SChatMessage extends RecipientMessage {
        m_string: string;
    }

    export interface PingMessage extends RecipientMessage {
        m_point: { x: number, y: number };
    }

    
    export interface Ability {
        m_abilLink: number;
        m_abilCmdIndex: number;
        m_buttonLink: number;
    }
    
    export interface AnnounceMessage extends RecipientMessage {
        m_announcement: {key: Ability | number};
        m_announceLink: number;
        m_otherUnitTag: number;
        m_unitTag: number;
    }
}