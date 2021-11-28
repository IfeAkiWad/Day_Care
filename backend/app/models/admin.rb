class Admin < ApplicationRecord
    has_secure_password #used to encrypt and authenticate passwords using BCrypt
    validates :username, uniqueness: { case_sensitive: false }
end
