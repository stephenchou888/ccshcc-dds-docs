import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZhCN: SidebarConfig = {
    '/start/': [
        {
            text: '入门',
            children: [
                '/start/README.md',
            ]
        }
    ],
    '/data/': [
        {
            text: '数据导入',
            children: [
                '/data/README.md',
            ]
        },
    ],
    '/import/': [
        {
            text: '数据导入',
            children: [
                '/import/README.md',
                '/import/signs.md',
                '/import/markings.md'
            ]
        }
    ]
}