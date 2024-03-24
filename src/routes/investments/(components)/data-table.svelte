<script lang="ts">
	import { get, readable } from 'svelte/store';
	import { Render, Subscribe, createRender, createTable } from 'svelte-headless-table';
	import * as Table from '$lib/components/ui/table';
	import {
		addColumnFilters,
		addHiddenColumns,
		addPagination,
		addSelectedRows,
		addSortBy,
		addTableFilter,
		addExpandedRows
	} from 'svelte-headless-table/plugins';
	import {
		DataTableDateCell,
		DataTableInvNameCell,
		DataTableStatusCell,
		DataTableRowActions,
		DataTableNameCell,
		DataTableColumnHeader,
		DataTableToolbar,
		DataTablePagination,
		DataTableExpandCell,
		DataTableExpandContent
	} from '.';

	import type { Investment } from '../(data)/schemas.js';

	export let tableData: Investment[];

	function formatDate(value: string) {
		const date = new Date(value);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	const table = createTable(readable(tableData), {
		select: addSelectedRows(),
		sort: addSortBy({
			toggleOrder: ['asc', 'desc']
		}),
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => {
				return value.toLowerCase().includes(filterValue.toLowerCase());
			},
			includeHiddenColumns: true
		}),
		colFilter: addColumnFilters(),
		hide: addHiddenColumns(),
		expand: addExpandedRows()
	});

	const columns = table.createColumns([
		table.display({
			id: 'expanded',
			header: '',
			cell: ({ row }, { pluginStates }) => {
				const { isExpanded } = pluginStates.expand.getRowState(row);
				return createRender(DataTableExpandCell, {
					isExpanded
				});
			},
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: 'start_date',
			header: 'Start Date',
			id: 'startDate',
			cell: ({ value }) => value,
			plugins: {
				filter: {
					getFilterValue: formatDate
				}
			}
		}),
		table.column({
			accessor: 'end_date',
			header: 'Dates',
			id: 'dates',
			cell: ({ value, row }) => {
				if (row.isData()) {
					return createRender(DataTableDateCell, {
						startDate: formatDate(value),
						endDate: formatDate(row.original.start_date)
					});
				}
				return value;
			},
			plugins: {
				filter: {
					getFilterValue: formatDate
				}
			}
		}),
		table.column({
			accessor: 'inv_name',
			header: 'Inv Name',
			id: 'invName',
			cell: ({ value, row }) => {
				if (row.isData()) {
					return createRender(DataTableInvNameCell, {
						value,
						labelValue: row.original.inv_type
					});
				}
				return value;
			}
		}),
		table.column({
			accessor: 'inv_type',
			header: 'Inv Type',
			id: 'invType',
			cell: ({ value }) => value,
			plugins: {
				colFilter: {
					fn: ({ filterValue, value }) => {
						if (filterValue.length === 0) return true;
						if (!Array.isArray(filterValue) || typeof value !== 'string') return true;
						return filterValue.some((filter) => {
							return value.includes(filter);
						});
					},
					initialFilterValue: [],
					render: ({ filterValue }) => {
						return get(filterValue);
					}
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'return_rate',
			header: 'Return Rate',
			id: 'returnRate',
			cell: ({ value }) => value + ' %'
		}),
		table.column({
			accessor: 'return_type',
			header: 'Return Type',
			id: 'returnType',
			cell: ({ value }) => value
		}),
		table.column({
			accessor: 'inv_amount',
			header: 'Inv Amt',
			id: 'invAmount',
			cell: ({ value }) => value
		}),
		table.column({
			accessor: 'return_amount',
			header: 'Return Amt',
			cell: ({ value }) => value
		}),
		table.column({
			accessor: 'name',
			id: 'name',
			header: 'Name',
			cell: ({ value }) => {
				return createRender(DataTableNameCell, {
					value
				});
			},
			plugins: {
				colFilter: {
					fn: ({ filterValue, value }) => {
						if (filterValue.length === 0) return true;
						if (!Array.isArray(filterValue) || typeof value !== 'string') return true;

						return filterValue.some((filter) => {
							return value.includes(filter);
						});
					},
					initialFilterValue: [],
					render: ({ filterValue }) => {
						return get(filterValue);
					}
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'inv_status',
			header: 'Inv Status',
			id: 'status',
			cell: ({ value }) => {
				return createRender(DataTableStatusCell, {
					value
				});
			},
			plugins: {
				colFilter: {
					fn: ({ filterValue, value }) => {
						if (filterValue.length === 0) return true;
						if (!Array.isArray(filterValue) || typeof value !== 'string') return true;
						return filterValue.some((filter) => {
							return value.includes(filter);
						});
					},
					initialFilterValue: [],
					render: ({ filterValue }) => {
						return get(filterValue);
					}
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.display({
			id: 'actions',
			header: () => {
				return '';
			},
			cell: ({ row }) => {
				if (row.isData() && row.original) {
					return createRender(DataTableRowActions, {
						row: row.original
					});
				}
				return '';
			}
		})
	]);

	const tableModel = table.createViewModel(columns);

	const { headerRows, rows, tableAttrs, tableBodyAttrs, pluginStates } = tableModel;
	const { expandedIds } = pluginStates.expand;
</script>

<div class="space-y-3">
	<DataTableToolbar {tableModel} />
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs}>
										{#if cell.id !== 'select' && cell.id !== 'actions'}
											<DataTableColumnHeader {props}
												><Render of={cell.render()} /></DataTableColumnHeader
											>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $rows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row
							{...rowAttrs}
							class={$expandedIds.hasOwnProperty(row.id) ? 'border-none' : ''}
						>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs}>
										<Render of={cell.render()} />
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
					{#if $expandedIds.hasOwnProperty(row.id)}
						{#if row.isData() && row.original}
							<Table.Row>
								<Table.Cell></Table.Cell>
								<Table.Cell colspan={9}>
									<DataTableExpandContent expanded={row.original} />
								</Table.Cell>
							</Table.Row>
						{/if}
					{/if}
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<DataTablePagination {tableModel} />
</div>
