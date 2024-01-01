import {
    CircleIcon,
    Receipt2Icon,
    TimelineIcon,
} from 'vue-tabler-icons';

export interface menu {
    title: string;
    icon: any;
    children?: menu[];
}

const horizontalItems: menu[] = [
    {
        title: 'Scripts',
        icon: TimelineIcon,
        children: [
            {
                title: 'All',
                icon: CircleIcon
            },
            {
                title: 'Cash',
                icon: CircleIcon
            },
            {
                title: 'FNO',
                icon: CircleIcon
            },
            {
                title: 'Nifty 50',
                icon: CircleIcon
            }
        ]
    },
    {
        title: 'Buildup',
        icon: Receipt2Icon,
        children: [
            {
                title: 'Long Buildup',
                icon: CircleIcon
            },
            {
                title: 'Short Buildup',
                icon: CircleIcon
            },
            {
                title: 'Long Cover',
                icon: CircleIcon
            },
            {
                title: 'Short Cover',
                icon: CircleIcon
            }
        ]
    },
    {
        title: 'Sector',
        icon: Receipt2Icon,
        children: [
            {
                title: 'Auto',
                icon: CircleIcon
            },
            {
                title: 'Bank',
                icon: CircleIcon
            },
            {
                title: 'Financial Services',
                icon: CircleIcon
            },
            {
                title: 'Financial Services 25/50',
                icon: CircleIcon
            },
            {
                title: 'Financial Services Ex Bank',
                icon: CircleIcon
            },
            {
                title: 'FMCG',
                icon: CircleIcon
            },
            {
                title: 'Healthcare',
                icon: CircleIcon
            },
            {
                title: 'IT',
                icon: CircleIcon
            },
            {
                title: 'Media',
                icon: CircleIcon
            },
            {
                title: 'Pharma',
                icon: CircleIcon
            },
            {
                title: 'Private Bank',
                icon: CircleIcon
            },
            {
                title: 'PSU Bank',
                icon: CircleIcon
            },
            {
                title: 'Realty',
                icon: CircleIcon
            },
            {
                title: 'Consumer Durables',
                icon: CircleIcon
            },
            {
                title: 'Oil and Gas',
                icon: CircleIcon
            },
            {
                title: 'MidSmall Financial Services',
                icon: CircleIcon
            },
            {
                title: 'MidSmall Healthcare',
                icon: CircleIcon
            },
            {
                title: 'MidSmall IT & Telecom',
                icon: CircleIcon
            }
        ]
    }
];

export default horizontalItems;
