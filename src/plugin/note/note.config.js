const config =
    [
        {
            groupName: 'Web',
            path: '/web',
            passages: [
                {passageName: 'Vue-3 Basic', date: '2022-12-01', tags: ['Vue'], path: '/note1'},
                {passageName: 'Vue-3 Component', date: '2022-12-02', tags: ['Vue'], path: '/note2'},
                {passageName: 'Vue-Router', date: '2022-12-03', tags: [], path: '/note3'},
                {passageName: 'Axios', date: '2022-12-04', tags: [], path: '/note4'},
                {passageName: 'Vue+Vite Deploy', date: '2022-12-05', tags: [], path: '/note5'},
            ]
        },
        {
            groupName: 'Java',
            path: '/java',
            passages: [
                {passageName: 'SpringBoot Study', date: '2022-12-04', tags: ['Spring'], path: '/spring_boot'},
                {passageName: 'Mybatis Study', date: '2022-12-05', tags: ['Database', 'Sql'], path: '/mybatis'},
            ]
        },
        {
            groupName: 'Linux',
            path: '/linux',
            passages: [
                {passageName: 'Bash Study', date: '2022-12-06', tags: ['bash', 'linux'], path: '/bash'},
            ]
        }
    ];

export default config;
