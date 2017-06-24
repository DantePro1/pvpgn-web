export interface User {
    uid: number;
    acct_username: string;
    username: string;
    acct_userid: number;
    acct_passhash1: string;
    acct_email: string;
    auth_admin: boolean;
    auth_normallogin: boolean;
    auth_changepass: boolean;
    auth_botlogin: boolean;
    auth_operator: boolean;
    new_at_team_flag: number;
    auth_lock: number;
    auth_lock_reason: string;
    auth_mute: number;
    auth_mute_time: number;
    auth_mutereason: string;
    auth_command_groups: number;
    acct_lastlogin_time: string;
    acct_lastlogin_owner: string;
    acct_lastlogin_clienttag: string;
    acct_lastlogin_ip: string;
    acct_ctime: string;
}