import type { SSTConfig } from 'sst';
import { AstroSite } from 'sst/constructs';

export default {
    config(_input) {
        return {
            name: 'got2koop',
            region: 'eu-central-1',
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const site = new AstroSite(stack, 'site');
            stack.addOutputs({
                url: site.url,
            });
        });
    },
} satisfies SSTConfig;
