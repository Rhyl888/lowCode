import { create } from 'zustand';

interface State {
	data: any;
}

interface Action {
	/**
	 * 设置变量值
	 * @param component key
	 * @param parentId 值
	 * @returns
	 */
	setData: (key: string, value: any) => void;
	/**
	 * 重置数据
	 * @returns
	 */
	resetData: () => void;
}

export const usePageDataStore = create<State & Action>((set) => ({
	data: {},
	setData: (key, value) => set((state) => ({ data: { ...state.data, [key]: value } })),
	resetData: () => set({ data: {} }),
}));
