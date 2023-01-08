/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from '../config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/categories`, async (req, res, ctx) => res(ctx.json({
    categories: [
      {
        id: 1,
        name: '상의',
      },
      {
        id: 2,
        name: '하의',
      },
    ],
  }))),

  rest.post(`${baseUrl}/product`, async (req, res, ctx) => res(
    ctx.json({
      productId: 1,
    }),
  )),

  rest.post(
    `https://api.cloudinary.com/v1_1/${config.cloudinaryName}/image/upload/`,
    async (req, res, ctx) => res(
      ctx.json({
        url: '이미지',
      }),
    ),
  ),
);

export default server;
