import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        media: {
            desktop: string;
            tablet: string;
            mobile: string;
            custom: (maxWidth: number) => string;
        };
        color: {
            black: string;
            primary: string;
        };
    }
}
