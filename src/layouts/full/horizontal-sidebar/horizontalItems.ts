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
                to: '/main/future/market-heatmap'
            },
            {
                title: 'Sector Heatmap',
                icon: CircleIcon,
                to: '/main/future/sector-heatmap'
            },
            {
                title: 'Daywise OI IV Breakup',
                icon: CircleIcon,
                to: '/main/future/daywise-oi-iv-breakup'
            },
            {
                title: 'EOD Analysis',
                icon: CircleIcon,
                to: '/main/future/eod-analysis'
            },
            {
                title: 'IV HV Breakup',
                icon: CircleIcon,
                to: '/main/future/iv-hv-breakup'
            },
            {
                title: 'High-Low Scanner',
                icon: CircleIcon,
                to: '/main/future/high-low-scanner'
            },
            {
                title: 'Indicator Scorer',
                icon: CircleIcon,
                to: '/main/future/indicator-scorer'
            },
            {
                title: 'Seasonaility',
                icon: CircleIcon,
                to: '/main/future/seasonaility'
            },
            {
                title: 'Reversal Indicator',
                icon: CircleIcon,
                to: '/main/future/reversal-indicator'
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
                to: '/main/options/option-chain'
            },
            {
                title: 'Greek Scanner',
                icon: CircleIcon,
                to: '/main/options/greek-scanner'
            },
            {
                title: 'Usual Option Activity',
                icon: CircleIcon,
                to: '/main/options/usual-option-activity'
            },
            {
                title: 'Spread Scanner',
                icon: CircleIcon,
                to: '/main/options/spread-scanner'
            },
            {
                title: 'Spread Chart',
                icon: CircleIcon,
                to: '/main/options/spread-chart'
            },
            {
                title: 'PCR Scanner',
                icon: CircleIcon,
                to: '/main/options/pcr-scanner'
            },
            {
                title: 'Volatility Surface',
                icon: CircleIcon,
                to: '/main/options/volatility-surface'
            },
            {
                title: 'Dynamic S/R Scan',
                icon: CircleIcon,
                to: '/main/options/dynamic-sr-scan'
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
                to: '/main/news/news-aggregator'
            },
            {
                title: 'Intraday Sentiment',
                icon: CircleIcon,
                to: '/main/news/intraday-sentiment'
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
                to: '/main/pairs/pair-scanner'
            },
            {
                title: 'Backtester',
                icon: CircleIcon,
                to: '/main/pairs/backtester'
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
                to: '/main/eod-participant-analysis/oi-analysis'
            },
            {
                title: 'Volume Analysis',
                icon: CircleIcon,
                to: '/main/eod-participant-analysis/volume-analysis'
            },
            {
                title: 'A/D Screener',
                icon: CircleIcon,
                to: '/main/price-n-volume/ad-screener'
            },
     
            {
                title: 'Indices Contributors',
                icon: CircleIcon,
                to: '/main/price-n-volume/indices-contributors'
            },
            {
                title: 'Deliveries',
                icon: CircleIcon,
                to: '/main/price-n-volume/cash-deliveries'
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
                to: '/main/custom-screens/intraday-alerts'
            }
        ]
    },
];

export default horizontalItems;
