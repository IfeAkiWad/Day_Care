# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Daycare.create(name: 'Sunny Day Care', address: '100 W 113th St. New York, NY 10026')

Daycare.create(name: 'Tator Totts Academy', address: '1999 Clark St. Victorville, CA 92392')


Toddler.create(name: 'Mario Lopez', birthday: '2018-11-03', emergency_contact: 'Leslie Lopez', phone: 2125557894, allergy: 'none', daycare_id: 1)

Toddler.create(name: 'Raynese Potter', birthday: '2019-05-12', emergency_contact: 'Mark Potter', phone: 7185553256, allergy: 'peanut', daycare_id: 1)

Toddler.create(name: 'Tony Giacomo', birthday: '2018-02-03', emergency_contact: 'Maria Gandolfini', phone: 2125551469, allergy: 'none', daycare_id: 1)

Toddler.create(name: 'Cynthia Moreno', birthday: '2019-04-19', emergency_contact: 'Carla De Miguel', phone: 2125553369, allergy: 'none', daycare_id: 1)