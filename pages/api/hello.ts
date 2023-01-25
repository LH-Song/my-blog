// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mock from 'mockjs';
const data = mock.mock({
  // 属性 list 的值是一个数组，其中随机含有 1 到 10 个元素
  'list|1-10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      name: '@name',
      'age|20-40': 25,
      'sex|1': ['male', 'femal'],
      birthday: '@date',
      email: '@email',
    },
  ],
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
