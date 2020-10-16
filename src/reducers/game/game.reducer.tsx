import {Action, ActionTypes} from "../../actions/actions";
import {CellPosition, CellProps} from "../../components/cell/cell.component";
import {handleOnClick, isAllCellsOpened, openAllBombs} from "../../utils/gridUtils";
import {generatedDefaultGrid, generateGrid} from "../../utils/gridGeneratorUtils";

export interface Grid {
    cells: Array<Array<CellProps>>
}

export interface GameState {
    isGameWon: boolean;
    isGameFailed: boolean
    isGridGenerated: boolean;
    grid: Grid
}

export const INITIAL_STATE: GameState = {
    isGameWon: false,
    isGameFailed: false,
    isGridGenerated: false,
    grid: {
        cells: generatedDefaultGrid()
    }
}

export const gameReducer = (state: GameState = INITIAL_STATE, action: Action): GameState => {
    switch (action.type) {
        case ActionTypes.startGame:
            return action.payload;
        case ActionTypes.cellClicked:
            let generatedGrid;

            if (!state.isGridGenerated) {
                generatedGrid = generateGrid(action.payload, 10, 10);
                state.isGridGenerated = true;
            } else {
                generatedGrid = state.grid.cells;
            }

            return {
                ...state,
                grid: {
                    cells: rerenderGridOnClick(generatedGrid, action.payload)
                },
                isGameWon: isGameWon(generatedGrid)
            }
        case ActionTypes.cellClickFailed:
            return {
                ...state,
                grid: openAllBombsGrid(state.grid),
                isGameFailed: true,
            }
        case ActionTypes.gameWon:
            return {
                ...state,
                grid: openAllBombsGrid(state.grid),
            }
        default:
            return INITIAL_STATE;
    }
}

function isGameWon(cells: CellProps[][]) {
    return isAllCellsOpened(cells);
}

function openAllBombsGrid(grid: Grid) {
    openAllBombs(grid)
    return grid;
}

function rerenderGridOnClick(cells: CellProps[][], cellPosition: CellPosition) {
    handleOnClick(cells, cellPosition);
    return cells;
}
