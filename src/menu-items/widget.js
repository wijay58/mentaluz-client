// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic, IconUserCircle, IconBrain, IconMessageChatbot, IconDashboard } from '@tabler/icons';

// constant
const icons = {
    IconChartArcs,
    IconClipboardList,
    IconChartInfographic,
    IconUserCircle,
    IconBrain,
    IconMessageChatbot,
    IconDashboard
};

// ==============================|| WIDGET MENU ITEMS ||============================== //

const widget = {
    id: 'widget',
    title: <FormattedMessage id="widget" />,
    icon: icons.IconChartArcs,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard
        },
        {
            id: 'profile',
            title: <FormattedMessage id="profile" />,
            type: 'item',
            url: 'user/profile',
            icon: icons.IconUserCircle
        },
        {
            id: 'aiSpecialists',
            title: <FormattedMessage id="aiSpecialists" />,
            type: 'item',
            url: 'agent/aiSpecialists',
            icon: icons.IconBrain
        },
        {
          id: 'chat',
          title: <FormattedMessage id="chat" />,
          type: 'item',
          url: 'agent/chat',
          icon: icons.IconMessageChatbot
        },
    ]
};

export default widget;
