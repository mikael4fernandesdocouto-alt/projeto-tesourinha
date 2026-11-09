import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests/e2e',fullyParallel:false,workers:1,timeout:30000,use:{baseURL:'http://127.0.0.1:3000',channel:'msedge',headless:true,trace:'retain-on-failure'},reporter:[['list'],['html',{open:'never'}]]});
