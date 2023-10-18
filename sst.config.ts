import type { SSTConfig } from 'sst';
import { AstroSite } from 'sst/constructs';

export default {
    config(_input) {
        return {
            name: 'got2koop',
            region: 'eu-central-1',
            profile: 'gothub-dev',
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            const site = new AstroSite(stack, 'site', {
                customDomain: {
                    domainName: 'got2koop.dev.gothub.io',
                    hostedZone: 'dev.gothub.io',
                },
            });
            stack.addOutputs({
                url: site.customDomainUrl || site.url,
            });
        });
    },
} satisfies SSTConfig;
