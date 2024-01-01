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
        title: 'Oi Buildup',
        icon: Receipt2Icon,
        children: [
            {
                title: 'All',
                icon: CircleIcon
            },
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
        title: 'Delivery %',
        icon: Receipt2Icon,
        children: [
            {
                title: 'All',
                icon: CircleIcon
            },
            {
                title: 'Increasing',
                icon: CircleIcon
            },
            {
                title: 'Decreasing',
                icon: CircleIcon
            }
        ]
    },
    {
        title: 'TQ/NT',
        icon: Receipt2Icon,
        children: [
            {
                title: 'All',
                icon: CircleIcon
            },
            {
                title: 'Increasing',
                icon: CircleIcon
            },
            {
                title: 'Decreasing',
                icon: CircleIcon
            }
        ]
    }
];

export default horizontalItems;
