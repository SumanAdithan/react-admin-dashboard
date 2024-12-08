import { ConnectedAccounts, Notification, Profile, Security } from '@components';

const SettingsPage = () => {
    return (
        <>
            <Profile />
            <Notification />
            <Security />
            <ConnectedAccounts />
        </>
    );
};

export default SettingsPage;
