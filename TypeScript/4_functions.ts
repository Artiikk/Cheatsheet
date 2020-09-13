function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

// перегрузка функции, можем вызывать ее по разному
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined }
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() }
  }

  return { x: a, y: b }
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))


// export interface ICompaniesState {
// 	data: Array<any>;
// 	count: number;
// }

// export interface ICompaniesFilterState {
// 	sectionsOpened: {[key: string]:boolean}
// 	category: string;
// 	filter: { [key: string] : any };
// 	sorting: {key: string, value: 'asc' | 'desc'};
// 	page: number,
// }

// interface IContextProps {
// 	tenders: ITendersState;
// 	tendersFilter: ITendersFilterState
// 	companies: ICompaniesState
// 	companiesFilter: ICompaniesFilterState
// 	dispatch: ({type}:{type:string, payload: any}) => void;
// }

// export const CombineContext = createContext({} as IContextProps);

// type CombinedState = {
// 	tenders: ITendersState,
// 	tendersFilter: ITendersFilterState
// 	companies: ICompaniesState
// 	companiesFilter: ICompaniesFilterState
// }

// type Action = {
// 	type: string,
// 	payload?: any
// }
  
// type CombinedReducerType = (state: CombinedState, action: Action) => CombinedState;