import { supabase } from './supabaseClient'

export class FetchData {
	constructor(perPage) {
		this.supabase = supabase;
		this.supabase_table = 'cars';
		this.perPage = perPage;
	}

	async getTotalCount() {
		const { count, error } = await this.supabase
			.from(this.supabase_table).select('*', { count: 'exact', head: true })

		return count
	}

	async getDistinctValues(column) {
		const { data, error } = await this.supabase
			.rpc('get_unique_values', { column_name: column })

		if (error) throw new Error(error.message)

		const result = data
			.map(item => item.unique_value)
			.sort((a, b) => a.localeCompare(b))

		return result
	}

	async getFilteredCars(filter, page) {
		const [manufacturer, fuelType, powertrain, model] = filter
		const filters = [
			manufacturer ? ['업체명', manufacturer] : null,
			fuelType ? ['연료', fuelType] : null,
			powertrain ? ['차량형식', powertrain] : null,
			model ? ['모델명', `%${model}%`, 'ilike'] : null,
		].filter(Boolean)

		let query = this.supabase
			.from(this.supabase_table)
			.select('*')
			.order('복합연비', { ascending: false })

		if (filters.length > 0) {
			for (const filter of filters) {
				const [column, value, method] = filter;
				query = query[method ? method : 'eq'](column, value)
			}
		}

		const { data, error } = await query
			.limit(this.perPage)
			.range((page - 1) * this.perPage, page * this.perPage - 1)

		if (error) throw new Error(error.message)

		return data
	}
}