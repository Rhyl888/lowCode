import { create } from 'zustand';

export interface Variable {
	/**
	 * 变量名
	 */
	name: string;
	/**
	 * 默认值
	 */
	defaultValue: string;
	/**
	 * 备注
	 */
	remark: string;
}

interface State {
	variables: Variable[];
}

interface Action {
	/**
	 * 变量数组
	 *@param Variables
	 */
	setVariables: (Variables: Variable[]) => void;
}

export const useVariablesStore = create<State & Action>((set) => ({
	variables: [],
	setVariables: (variables) => set({ variables }),
}));
