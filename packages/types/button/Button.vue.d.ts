import { PropType } from 'vue';
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
export type ButtonSize = 'large' | 'default' | 'small';
export type NativeType = 'button' | 'submit' | 'reset';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    nativeType: {
        type: PropType<NativeType>;
        default: string;
    };
}>, {
    handleClick: (e: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    nativeType: {
        type: PropType<NativeType>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: ButtonType;
    size: ButtonSize;
    round: boolean;
    disabled: boolean;
    block: boolean;
    nativeType: NativeType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
