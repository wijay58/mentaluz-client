// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic, IconUserCircle, IconBrain, IconMessageChatbot } from '@tabler/icons';

// constant
const icons = {
    IconChartArcs,
    IconClipboardList,
    IconChartInfographic,
    IconUserCircle,
    IconBrain,
    IconMessageChatbot
};

// ==============================|| WIDGET MENU ITEMS ||============================== //

const widget = {
    id: 'widget',
    title: <FormattedMessage id="widget" />,
    icon: icons.IconChartArcs,
    type: 'group',
    children: [
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
        {
            id: 'statistics',
            title: <FormattedMessage id="statistics" />,
            type: 'item',
            url: '/widget/statistics',
            icon: icons.IconChartArcs
        },
        {
            id: 'data',
            title: <FormattedMessage id="data" />,
            type: 'item',
            url: '/widget/data',
            icon: icons.IconClipboardList
        },
        {
            id: 'chart',
            title: <FormattedMessage id="chart" />,
            type: 'item',
            url: '/widget/chart',
            icon: icons.IconChartInfographic
        }
    ]
};

export default widget;
