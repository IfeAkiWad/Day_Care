# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Daycare.create(name: 'Sunny Day Care', address: '1999 Clark St. Victorville, CA 92392')

Daycare.create(name: 'Tator Totts Academy', address: '100 W 113th St. New York, NY 10026')


Child.create(name: 'Mario Lopez', birthday: '2018-11-03', )