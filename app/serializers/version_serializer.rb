class VersionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :item_type, :item_id, :event, :created_at
end
