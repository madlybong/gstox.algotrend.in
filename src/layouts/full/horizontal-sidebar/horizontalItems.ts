import {
    CircleIcon,
    Menu2Icon,
    NewsIcon,
    Receipt2Icon,
    ReportAnalyticsIcon,
    LayersIntersectIcon,
    TimelineIcon,
    HeartHandshakeIcon
} from 'vue-tabler-icons';

export interface menu {
    title: string;
    icon: any;
    to?: string;
    children?: menu[];
}

const horizontalItems: menu[] = [
    {
        title: 'Future',
        icon: TimelineIcon,
        children: [
            {
                title: 'Market Heatmap',
                icon: CircleIcon,
                to: '/future/market-heatmap'
            },
            {
                title: 'Sector Heatmap',
                icon: CircleIcon,
                to: '/future/sector-heatmap'
            },
            {
                title: 'Daywise OI IV Breakup',
                icon: CircleIcon,
                to: '/future/daywise-oi-iv-breakup'
            },
            {
                title: 'EOD Analysis',
                icon: CircleIcon,
                to: '/future/eod-analysis'
            },
            {
                title: 'IV HV Breakup',
                icon: CircleIcon,
                to: '/future/iv-hv-breakup'
            },
            {
                title: 'High-Low Scanner',
                icon: CircleIcon,
                to: '/future/high-low-scanner'
            },
            {
                title: 'Indicator Scorer',
                icon: CircleIcon,
                to: '/future/indicator-scorer'
            },
            {
                title: 'Seasonaility',
                icon: CircleIcon,
                to: '/future/seasonaility'
            },
            {
                title: 'Reversal Indicator',
                icon: CircleIcon,
                to: '/future/reversal-indicator'
            }
        ]
    },
    {
        title: 'Options',
        icon: Receipt2Icon,
        children: [
            {
                title: 'Option Chain',
                icon: CircleIcon,
                to: '/options/option-chain'
            },
            {
                title: 'Greek Scanner',
                icon: CircleIcon,
                to: '/options/greek-scanner'
            },
            {
                title: 'Usual Option Activity',
                icon: CircleIcon,
                to: '/options/usual-option-activity'
            },
            {
                title: 'Spread Scanner',
                icon: CircleIcon,
                to: '/options/spread-scanner'
            },
            {
                title: 'Spread Chart',
                icon: CircleIcon,
                to: '/options/spread-chart'
            },
            {
                title: 'PCR Scanner',
                icon: CircleIcon,
                to: '/options/pcr-scanner'
            },
            {
                title: 'Volatility Surface',
                icon: CircleIcon,
                to: '/options/volatility-surface'
            },
            {
                title: 'Dynamic S/R Scan',
                icon: CircleIcon,
                to: '/options/dynamic-sr-scan'
            }
        ]
    },

    {
        title: 'News',
        icon: NewsIcon,
        children: [
            {
                title: 'News Aggregator',
                icon: CircleIcon,
                to: '/news/news-aggregator'
            },
            {
                title: 'Intraday Sentiment',
                icon: CircleIcon,
                to: '/news/intraday-sentiment'
            }
        ]
    },
    
    {
        title: 'Pairs',
        icon: HeartHandshakeIcon,
        children: [
            {
                title: 'Pair Scanner',
                icon: CircleIcon,
                to: '/pairs/pair-scanner'
            },
            {
                title: 'Backtester',
                icon: CircleIcon,
                to: '/pairs/backtester'
            }
        ]
    },
    {
        title: 'EOD Analysis',
        icon: ReportAnalyticsIcon,
        children: [
            {
                title: 'OI Analysis',
                icon: CircleIcon,
                to: '/eod-participant-analysis/oi-analysis'
            },
            {
                title: 'Volume Analysis',
                icon: CircleIcon,
                to: '/eod-participant-analysis/volume-analysis'
            },
            {
                title: 'A/D Screener',
                icon: CircleIcon,
                to: '/price-n-volume/ad-screener'
            },
     
            {
                title: 'Indices Contributors',
                icon: CircleIcon,
                to: '/price-n-volume/indices-contributors'
            },
            {
                title: 'Deliveries',
                icon: CircleIcon,
                to: '/price-n-volume/cash-deliveries'
            }
        ]
    },
    {
        title: 'Custom Screens',
        icon: LayersIntersectIcon,
        children: [
            {
                title: 'Intraday Alerts',
                icon: CircleIcon,
                to: '/custom-screens/intraday-alerts'
            }
        ]
    },
];

export default horizontalItems;
